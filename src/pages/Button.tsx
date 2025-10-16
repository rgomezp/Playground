import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CodeBlock } from '../components';

const ButtonDocs: React.FC = () => {
  const buttonVariants = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
  const buttonSizes = ['sm', 'md', 'lg'] as const;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Button Component</h1>
        <p className="text-gray-600 mt-2">Pre-styled button component with multiple variants and sizes</p>
      </div>

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Primary Button
              </button>
            </div>
            <CodeBlock>{`import { Button } from './components';

<Button>Primary Button</Button>`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {buttonVariants.map((variant) => (
                <button
                  key={variant}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                    variant === 'secondary' ? 'bg-gray-600 text-white hover:bg-gray-700' :
                    variant === 'outline' ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50' :
                    variant === 'ghost' ? 'text-blue-600 hover:bg-blue-50' :
                    'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
            <CodeBlock>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              {buttonSizes.map((size) => (
                <button
                  key={size}
                  className={`bg-blue-600 text-white rounded-lg font-medium transition-colors ${
                    size === 'sm' ? 'px-3 py-1.5 text-sm' :
                    size === 'md' ? 'px-4 py-2 text-base' :
                    'px-6 py-3 text-lg'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <CodeBlock>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* States */}
      <Card>
        <CardHeader>
          <CardTitle>States</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Normal
              </button>
              <button className="px-4 py-2 bg-blue-300 text-white rounded-lg cursor-not-allowed opacity-50">
                Disabled
              </button>
            </div>
            <CodeBlock>{`<Button>Normal</Button>
<Button disabled>Disabled</Button>`}</CodeBlock>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'primary'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Visual style variant</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'sm' | 'md' | 'lg'</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'md'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Button size</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Disable the button</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onClick</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{'() => void'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Click handler</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ButtonDocs;
