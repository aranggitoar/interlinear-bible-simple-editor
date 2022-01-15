import React from 'react';
import { DefaultButton } from '@fluentui/react';

const settingsText = "Settings"

export function MenuBlockSettings() {
  return (
    <div className="menu-items">
      <DefaultButton id="menu-settings">
        {settingsText}
      </DefaultButton>
    </div>
  );
}

export default MenuBlockSettings;
