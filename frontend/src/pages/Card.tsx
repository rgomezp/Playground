import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CodeBlock } from '../components';

const CardDocs: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Card Component</h1>
        <p className="text-gray-600 mt-2">Flexible card component with header, content, and footer sections</p>
      </div>

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
              <p className="text-gray-600">This is the card content area.</p>
            </div>
            <CodeBlock>{`import { Card, CardHeader, CardTitle, CardContent } from './components';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    This is the card content area.
  </CardContent>
</Card>`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Card Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Card Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <div className="text-sm">Default Card</div>
              </div>
              <div className="bg-white shadow-lg border border-gray-100 rounded-lg p-3">
                <div className="text-sm">Elevated Card</div>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
                <div className="text-sm">Outlined Card</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-sm">Flat Card</div>
              </div>
            </div>
            <CodeBlock>{`<Card variant="default">Default Card</Card>
<Card variant="elevated">Elevated Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="flat">Flat Card</Card>`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Padding Options */}
      <Card>
        <CardHeader>
          <CardTitle>Padding Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <div className="text-sm">Small Padding</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-sm">Medium Padding (default)</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="text-sm">Large Padding</div>
              </div>
            </div>
            <CodeBlock>{`<Card padding="sm">Small Padding</Card>
<Card padding="md">Medium Padding</Card>
<Card padding="lg">Large Padding</Card>`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Complete Example */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">User Profile</h3>
              </div>
              <div className="text-gray-600 mb-4">
                <p>This is a complete card example with header, content, and footer.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock>{`<Card variant="elevated">
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This is a complete card example with header, content, and footer.</p>
  </CardContent>
  <CardFooter>
    <div className="flex gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </div>
  </CardFooter>
</Card>`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Props */}
      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Props</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Card</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">variant, padding, className</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Main card container</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CardHeader</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">className</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Header section with bottom margin</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CardTitle</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">className</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Styled title text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CardContent</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">className</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Main content area</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CardFooter</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">className</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Footer section with top border</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDocs;
