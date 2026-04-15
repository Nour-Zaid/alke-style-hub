import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-16 md:py-24 max-w-lg mx-auto">
      <h1 className="text-xs uppercase tracking-[0.3em] mb-10">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Name</label>
          <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-none" required />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Email</label>
          <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-none" required />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Message</label>
          <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-none min-h-[120px]" required />
        </div>
        <Button type="submit" className="w-full rounded-none uppercase tracking-[0.15em] text-xs h-12">Send Message</Button>
      </form>
    </div>
  );
}
