import React, { useState } from 'react';

import ErrorBoundary from 'components/ErrorBoundary';
import Markdown from 'components/Markdown';
import { Card, CardBody } from 'components/base/Card';
import Link from 'components/base/Link';
import { TabbedView } from 'components/base/Tabs';
import Text from 'components/base/Text';
import TextArea from 'components/base/TextArea';

interface TextEntryProps {
  name?: string;
  value: string;
  setValue: (value: string) => void;
  maxLength?: number;
}

const TextEntry: React.FC<TextEntryProps> = ({ value = '', setValue, maxLength = 1000 }) => {
  const [tab, setTab] = useState('0');

  return (
    <>
      <Card>
        <ErrorBoundary>
          <TabbedView
            activeTab={parseInt(tab, 10)}
            tabs={[
              {
                label: 'Source',
                content: (
                  <TextArea
                    name="textarea"
                    maxLength={maxLength}
                    className="w-full markdown-input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                ),
                onClick: () => setTab('0'),
              },
              {
                label: 'Preview',
                content: (
                  <CardBody>
                    <Markdown markdown={value} />
                  </CardBody>
                ),
                onClick: () => setTab('1'),
              },
            ]}
          />
        </ErrorBoundary>
      </Card>
      <Text sm italic>
        Having trouble formatting your posts? Check out the{' '}
        <Link href="/markdown" target="_blank">
          markdown guide
        </Link>
        .
      </Text>
    </>
  );
};

export default TextEntry;