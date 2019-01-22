import { eyesItInstance } from '../../test/utils/eyes-it';

import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import {
  pageHeaderTestkitFactory,
  dropdownTestkitFactory,
} from '../../testkit/protractor';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';

import { storySettings } from '../../stories/PageHeader/storySettings';

describe('PageHeader', () => {
  const eyes = eyesItInstance();

  const testStoryUrl = ({ testName, rtl }) =>
    createTestStoryUrl({ ...storySettings, testName, rtl });

  const initTest = async ({ testName, rtl }) => {
    await browser.get(testStoryUrl({ testName, rtl }));
    const dataHook = 'story-page-header';
    const driver = pageHeaderTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find PageHeader');
    return driver;
  };

  eyes.it('should disaply standard header', async () => {
    await initTest({ testName: '1. Standard', rtl: true });
  });

  describe('Ellipsis', () => {
    eyes.it('should disaply title and subtitle with ellipsis', async () => {
      await initTest({ testName: '2. Long Title and Subtitle' });
    });
    eyes.it('should disaply an opened dropdown (no ellipsis)', async () => {
      await initTest({ testName: '3. Title with Dropdown' });
      const dropdownTeskit = dropdownTestkitFactory({
        dataHook: 'title-dropdown',
      });
      await dropdownTeskit.click();
    });
  });

  describe('RTL', () => {
    eyes.it('should disaply standard header', async () => {
      await initTest({ testName: '1. Standard', rtl: true });
    });
  });
});
