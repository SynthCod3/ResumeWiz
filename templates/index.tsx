import { Button } from '@/components/ui/button';
import TestTemplate from './testTemplate';
import Link from 'next/link';

const renderTemplate = (templateId: number) => {
  switch (templateId) {
    case 1:
      return <TestTemplate />;
    case 2:
      return <TestTemplate />;
    case 3:
      return <TestTemplate />;
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
