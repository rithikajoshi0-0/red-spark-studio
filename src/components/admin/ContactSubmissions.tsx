import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getContactSubmissions, updateSubmissionStatus, ContactFormSubmission } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar, User, DollarSign, FileText, GraduationCap } from "lucide-react";

const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactFormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'completed'>('all');
  const { toast } = useToast();

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const data = await getContactSubmissions();
      setSubmissions(data);
    } catch (error) {
      console.error('Error loading submissions:', error);
      toast({
        title: "Error",
        description: "Failed to load contact submissions.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, status: 'new' | 'contacted' | 'completed') => {
    try {
      await updateSubmissionStatus(id, status);
      setSubmissions(prev => 
        prev.map(sub => 
          sub.id === id ? { ...sub, status } : sub
        )
      );
      toast({
        title: "Status Updated",
        description: "Submission status has been updated successfully."
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update submission status.",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSubmissions = submissions.filter(sub => 
    filter === 'all' || sub.status === filter
  );

  if (loading) {
    return <div className="p-6">Loading submissions...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Contact Form Submissions</h1>
        <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Submissions</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredSubmissions.map((submission) => (
          <Card key={submission.id} className="border-0 shadow-card">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {submission.name}
                    {submission.is_student && (
                      <Badge variant="secondary" className="ml-2">
                        <GraduationCap className="w-3 h-3 mr-1" />
                        Student
                      </Badge>
                    )}
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {submission.email}
                    </div>
                    {submission.phone && (
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {submission.phone}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(submission.created_at!).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(submission.status!)}>
                    {submission.status}
                  </Badge>
                  <Select 
                    value={submission.status} 
                    onValueChange={(value: any) => handleStatusUpdate(submission.id!, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Service Needed</h4>
                  <p className="text-sm">{submission.service_needed}</p>
                </div>
                {submission.budget_range && (
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1 flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      Budget Range
                    </h4>
                    <p className="text-sm">{submission.budget_range}</p>
                  </div>
                )}
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2 flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  Project Details
                </h4>
                <p className="text-sm bg-muted p-3 rounded-md">{submission.project_details}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(`mailto:${submission.email}`, '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Reply via Email
                </Button>
                {submission.phone && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(`tel:${submission.phone}`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSubmissions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No submissions found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;
