import React from 'react';
import { string, bool } from 'prop-types';
import classNames from 'classnames';

import typography from '../../src/Typography';
import styles from './styles.scss';

/** Capitalize first character */
function capitalize(str) {
  if (!str) {
    return undefined;
  }
  return str[0].toUpperCase() + str.substring(1);
}

const DEFAULT_SIZE = 'medium';
const DEFAULT_WEIGHT = 'thin';
const DEFAULT_SKIN = 'standard';

const propsToClassNames = props => {
  const names = {
    text: true,
    [`size${capitalize(props.size)}`]: !!props.size,
    [`weight${capitalize(props.weight)}`]: !!props.weight,
    [`skin${capitalize(props.skin)}`]: !!props.skin,
    link: !!props.link,
    disabled: !!props.disabled,
    light: !!props.light,
    secondary: !!props.secondary,
  };
  return Object.entries(names).reduce((acc, entry) => {
    if (entry[1]) {
      acc.push(entry[0]);
    }
    return acc;
  }, []);
};

const textClasses = props => {
  return classNames(propsToClassNames(props).map(name => typography[name]));
};

const TextSizeWeightExample = props => {
  const classes = textClasses(props);
  return (
    <tr>
      <td>{props.size ? props.size : `[${DEFAULT_SIZE}]`}</td>
      <td>{props.weight ? props.weight : `[${DEFAULT_WEIGHT}]`}</td>
      <td>{propsToClassNames(props).join(' ')}</td>
      <td>
        <span className={classes}>This is a text</span>
      </td>
    </tr>
  );
};

TextSizeWeightExample.propTypes = {
  size: string,
  weight: string,
};

const TextColorExample = props => {
  const boolLabel = val => (val === undefined ? `-` : val ? 'true' : 'false');
  const link = boolLabel(props.link);
  const disabled = boolLabel(props.disabled);
  const light = boolLabel(props.light);
  const secondary = boolLabel(props.secondary);
  return (
    <tr>
      <td>{props.skin ? props.skin : `[${DEFAULT_SKIN}]`}</td>
      <td>{link}</td>
      <td>{disabled}</td>
      <td>{light}</td>
      <td>{secondary}</td>
      <td>{propsToClassNames(props).join(' ')}</td>
      <td style={{ backgroundColor: props.light ? 'black' : 'white' }}>
        <span className={textClasses(props)}>This is a text</span>
      </td>
      <td>{props.note}</td>
    </tr>
  );
};

TextColorExample.propTypes = {
  skin: string,
  link: bool,
  disabled: bool,
  light: bool,
  secondary: bool,
  note: string,
};

export function renderSizeAndWeightTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Size</th>
          <th>Weight</th>
          <th>Classes</th>
          <th>Example</th>
        </tr>
      </thead>
      <TextSizeWeightExample />

      {/* size & weight*/}
      <TextSizeWeightExample size="medium" />
      <TextSizeWeightExample size="small" />
      <TextSizeWeightExample size="tiny" />

      <TextSizeWeightExample weight="thin" />
      <TextSizeWeightExample weight="normal" />
      <TextSizeWeightExample weight="bold" />

      <TextSizeWeightExample weight="thin" size="tiny" />
      <TextSizeWeightExample weight="normal" size="tiny" />
      <TextSizeWeightExample weight="bold" size="tiny" />

      <TextSizeWeightExample weight="thin" size="small" />
      <TextSizeWeightExample weight="normal" size="small" />
      <TextSizeWeightExample weight="bold" size="small" />

      <TextSizeWeightExample weight="thin" size="medium" />
      <TextSizeWeightExample weight="normal" size="medium" />
      <TextSizeWeightExample weight="bold" size="medium" />
    </table>
  );
}

export function renderColorTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Skin</th>
          <th>Link</th>
          <th>Disabled</th>
          <th>Light</th>
          <th>Secondary</th>
          <th>Classes</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
      </thead>
      <TextColorExample />

      {/* color */}
      <TextColorExample skin="standard" />
      <TextColorExample skin="success" />
      <TextColorExample skin="error" />
      <TextColorExample skin="premium" />

      <TextColorExample link />
      <TextColorExample disabled />
      <TextColorExample light />
      <TextColorExample secondary />
      <TextColorExample secondary light />

      {/* skin takes precedence */}
      <TextColorExample
        skin="standard"
        link
        note="default skin class is explicitly set"
      />
      <TextColorExample
        skin="standard"
        disabled
        note="default skin class is explicitly set"
      />
      <TextColorExample
        skin="standard"
        light
        note="default skin class is explicitly set"
      />
      <TextColorExample
        skin="standard"
        secondary
        note="default skin class is explicitly set"
      />

      <TextColorExample
        skin="error"
        link
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="error"
        disabled
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="error"
        light
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="error"
        secondary
        note="boolean flags have no affect on non standard skin"
      />

      <TextColorExample
        skin="success"
        link
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="success"
        disabled
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="success"
        light
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="success"
        secondary
        note="boolean flags have no affect on non standard skin"
      />

      <TextColorExample
        skin="premium"
        link
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="premium"
        disabled
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="premium"
        light
        note="boolean flags have no affect on non standard skin"
      />
      <TextColorExample
        skin="premium"
        secondary
        note="boolean flags have no affect on non standard skin"
      />
    </table>
  );
}
