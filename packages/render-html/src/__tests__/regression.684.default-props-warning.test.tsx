import React from 'react';
import { render } from '@testing-library/react-native';
import RenderHTML from '../RenderHTML';

/**
 * https://github.com/meliorence/react-native-render-html/issues/684
 */
describe('RenderHTML component', () => {
  it('should not trigger defaultProps warning', () => {
    // Mock console.warn to capture warnings
    const originalWarn = console.warn;
    const warnings: string[] = [];
    console.warn = (...args) => {
      warnings.push(args.join(' '));
    };

    // Render a component that would previously trigger the warning
    render(
      <RenderHTML
        source={{ html: '<div>Test content</div>' }}
        contentWidth={300}
      />
    );

    // Restore console.warn
    console.warn = originalWarn;

    // Check that no defaultProps warnings were emitted
    const defaultPropsWarnings = warnings.filter(
      (warning) =>
        warning.includes('defaultProps') &&
        warning.includes('function components')
    );
    expect(defaultPropsWarnings).toHaveLength(0);
  });
});
