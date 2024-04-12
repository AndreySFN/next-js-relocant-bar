// TODOL Refactoring

import React from 'react';
import hash from 'object-hash'; // Убедитесь, что установили библиотеку object-hash

// Определение типов для стилей
type StyleValue = string | number | Styles;
type Styles = {
  [key: string]: StyleValue | NestedStyles;
};
type NestedStyles = { [key: string]: StyleValue };
type StyleFunction<Props> = (props: Props) => Styles;

// Преобразование camelCase в kebab-case для CSS свойств
function camelToKebabCase(string: string) {
  return string.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
}

// Добавление 'px' к числовым значениям, если это необходимо
function addPixelSuffixIfNeeded(property: string, value: any) {
  const pixelUnitsProperties = new Set([
    'width', 'height', 'top', 'left', 'right', 'bottom', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight', 'fontSize',
    'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
    'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
    'borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderRadius'
  ]);
  if (typeof value === 'number' && pixelUnitsProperties.has(property)) {
    return `${value}px`;
  }
  return value;
}

// Основная функция для создания стилизованных компонентов
function _styled<T extends React.ElementType>(Component: T) {
  return (styles: Styles | StyleFunction<React.ComponentProps<T>>) => {
    return React.forwardRef<HTMLElement, React.ComponentProps<T>>((props, ref) => {
      const resolvedStyles = typeof styles === 'function' ? styles(props) : styles;
      const styleHash = hash(resolvedStyles); // Создание хеша на основе стилей
      const styleClassName = `styled-${styleHash}`;

      let styleString = `.${styleClassName} { `;
      for (const property in resolvedStyles) {
        const styleValue = resolvedStyles[property];
        const kebabProperty = camelToKebabCase(property);
        if (typeof styleValue === 'object' && !(styleValue instanceof Array)) {
          styleString += `${kebabProperty} { `;
          for (const subProperty in styleValue) {
            const subPropertyValue = addPixelSuffixIfNeeded(subProperty, styleValue[subProperty]);
            const kebabSubProperty = camelToKebabCase(subProperty);
            // Обеспечение того, чтобы значения URL в стилях вставлялись напрямую
            const propertyValue = subProperty === 'backgroundImage' ? `url("${subPropertyValue}")` : subPropertyValue;
            styleString += `${kebabSubProperty}: ${propertyValue}; `;
          }
          styleString += '} ';
        } else {
          const finalPropertyValue = addPixelSuffixIfNeeded(property, styleValue);
          styleString += `${kebabProperty}: ${finalPropertyValue}; `;
        }
      }
      styleString += '}';

      return (
        <>
          <style dangerouslySetInnerHTML={{ __html: styleString }}></style>
          <Component {...props} ref={ref} className={`${props.className || ''} ${styleClassName}`.trim()} />
        </>
      );
    });
  };
}

type TagType = React.ElementType | keyof JSX.IntrinsicElements;

const styled = <T extends TagType>(tag: T) => _styled(tag);

// Добавление методов для всех стандартных HTML тегов
const tags = [
  'a', 'div', 'span', 'p', 'button', 'input', 'label', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'section', 'article', 'nav', 'aside', 'header', 'footer', 'table', 'tr', 'td', 'th', 'thead', 'tbody',
  'ul', 'ol', 'li', 'img', 'svg', 'canvas', 'audio', 'video', 'textarea', 'select', 'option', 'optgroup'
];

tags.forEach((tag: TagType) => {
  styled[tag] = _styled(tag);
});

export default styled;
