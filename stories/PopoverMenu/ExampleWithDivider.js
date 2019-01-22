import React from 'react';
import PopoverMenu from 'wix-style-react/PopoverMenu';
import PopoverMenuItem from 'wix-style-react/PopoverMenuItem';
import PopoverMenuDivider from 'wix-style-react/PopoverMenuDivider';
import { storySettings } from './storySettings';

export default class PopoverMenuWithDividerExample extends React.Component {
  render() {
    return (
      <PopoverMenu dataHook={storySettings.dataHookDivider}>
        <PopoverMenuItem text="Edit" onClick={() => {}} />
        <PopoverMenuItem text="Hide" onClick={() => {}} />
        <PopoverMenuDivider dataHook={storySettings.itemDataHookDivider} />
        <PopoverMenuItem text="Remove" onClick={() => {}} />
      </PopoverMenu>
    );
  }
}
