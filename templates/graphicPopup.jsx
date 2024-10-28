import React, { useEffect } from 'react';
import a11y from 'core/js/a11y';
import { classes, compile, templates } from 'core/js/reactHelpers';

export default function GraphicPopup(props) {

  const {
    
  } = props;

  useEffect(() => {
    const focusElement = $(`.graphic-popup__item`);
    a11y.focusFirst(focusElement);
  });

  return (
    <div className='graphic-popup__inner'>

      <div className='graphic-popup__item'>

        <div className="graphic-popup__item-content">
          <div className="graphic-popup__item-content-inner">

            {props.body &&
            <div className="graphic-popup__item-body">
              <div
                className="graphic-popup__item-body-inner"
                dangerouslySetInnerHTML={{ __html: compile(props.body) }}
              />
            </div>
            }

            <templates.image {...props._graphic}
              classNamePrefixSeparator='__item-'
              classNamePrefixes={['component-item', 'graphic-popup']}
              attributionClassNamePrefixes={['component', 'graphic-popup']}
            />

          </div>
        </div>

      </div>

    </div>

  );
}
