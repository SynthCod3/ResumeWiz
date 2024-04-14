'use client';

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8TyaDV0rrgh
 */
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect } from 'react';
import renderTemplate from '@/templates';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEditorStore } from '@/utils/stores';

export function Editor() {
  const setName = useEditorStore((state) => state.setName);
  const setContact = useEditorStore((state) => state.setContact);
  const contact = useEditorStore((state) => state.contact);

  const [template, setTemplate] = React.useState(1);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const templateId = searchParams.get('template');
    setTemplate(templateId ? parseInt(templateId) : 1);
  }, []);

  const downloadAsImage = async () => {
    const element = document.getElementById('resume'); // Ensure your resume template has this ID
    if (element) {
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'resume.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const downloadAsPDF = async () => {
    const element = document.getElementById('resume'); // Ensure your resume template has this ID
    if (element) {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [element.offsetWidth, element.offsetHeight],
      });
      doc.html(element, {
        callback: function (doc) {
          doc.save('resume.pdf');
        },
        x: 0,
        y: 0,
        width: element.offsetWidth,
      });
    }
  };

  return (
    <div className="w-full max-w-90 px-4 mx-auto lg:grid lg:gap-4 lg:px-6 lg:grid-cols-2 mt-20">
      <div className="border lg:border-0 lg:rounded lg:overflow-hidden">
        <div className="p-4 space-y-4 lg:p-10">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" onChange={(e) => {
              setName(e.target.value);
            }} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Address</Label>
            <Input id="name" placeholder="Enter your address" onChange={(e) => {
              setContact({...contact, address: e.target.value});
            }} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-information">Contact Information</Label>
            <Textarea
              className="min-h-[100px]"
              id="contact-information"
              placeholder="Enter your contact information"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="summary">Summary</Label>
            <Textarea
              className="min-h-[100px]"
              id="summary"
              placeholder="Enter your summary"
            />
          </div>
        </div>
        <div className="border-t">
          <div className="p-4 space-y-4 lg:p-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="education"
                  placeholder="Enter your education"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Work Experience</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="experience"
                  placeholder="Enter your work experience"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="skills"
                  placeholder="Enter your skills"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Select
          onValueChange={(value) => {
            if (value === 'png') downloadAsImage();
            if (value === 'pdf') downloadAsPDF();
          }}
        >
          <Label>Download as :</Label>
          <SelectTrigger
            className="w-[180px] mb-3"
            style={{
              outline: 'none',
              /* Optional: Add custom styles for focus state to maintain accessibility */
              boxShadow: '0 0 0 1px rgba(0, 123, 255, 0.1)', // Example custom focus style
            }}
          >
            <SelectValue placeholder="Download" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Format</SelectLabel>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {renderTemplate(template)}
      </div>
    </div>
  );
}
