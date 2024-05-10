import { Button } from '@/components/ui/button';
import TestTemplate from './testTemplate';
import Link from 'next/link';
import Template1 from './template1';
import Template2 from './template2';
import Template3 from './template3';
import Template4 from './template4';

const renderTemplate = (templateId: number) => {
  switch (templateId) {
    case 1:
      return <Template1 />;
    case 2:
      return <Template2 />;
    case 3:
      return <TestTemplate />;
    case 4:
      return <Template3 />;
    case 5:
      return <Template4 />;
    default:
      return (
        <div>
          <h2>No template found please select a template</h2>
          <Link href="/templates">
            <Button>Select a template</Button>
          </Link>
        </div>
      ); // Fallback for undefined template
  }
};

export default renderTemplate;
