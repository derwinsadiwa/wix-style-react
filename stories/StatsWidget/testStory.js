/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../storiesHierarchy';
import { storySettings, testStories } from './storySettings';

import Standard from './ExampleStatsWidgetStandard';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.statsWidget, () => <Standard />);
