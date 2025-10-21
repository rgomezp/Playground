import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components';

const Playground: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Playground</h1>
        <p className="text-gray-600 mt-2">Build anything</p>
      </div>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Ready to Build</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Playground;
