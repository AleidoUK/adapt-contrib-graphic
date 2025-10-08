import React from 'react';
import { classes, compile, templates } from 'core/js/reactHelpers';

const LinkWrapper = ({ href, children, target, className, role }) =>
  href
    ? <a href={href} target={target} className={className} role={role}>{children}</a>
    : children;

export default function Graphic(props) {
  const {
    _id,
    openPopup,
    _isScrollable,
    _scrollPercent,
    _graphic,
    _popup,
    _globals
  } = props;

  const scrollableProperties = _isScrollable
    ? {
      role: 'slider',
      className: 'component__widget graphic__widget js-graphic-scrollbar',
      'aria-controls': `graphic__scroll__container__${_id}`,
      'aria-orientation': 'horizontal',
      'aria-valuemax': '100',
      'aria-valuemin': '0',
      'aria-valuenow': _scrollPercent,
      'aria-label': Handlebars.compile(_globals._components._graphic.scrollAriaLabel)(props),
      'aria-describedby': _graphic.longdescription ? `graphic__longdescription__${_id}` : undefined,
      tabIndex: '0'
    }
    : {};
  return (
    <div className='component__inner graphic__inner'>

      <templates.header {...props} />

      <div className='component__widget graphic__widget' {...scrollableProperties}>

      <div className="graphic__link-icon icon js-graphic-link" aria-hidden="true"></div>

      <button
        className={classes([
          'graphic__popup-icon'
        ])}
        onClick={openPopup}
        aria-label={_popup.iconAriaLabel}
      >
        <span className="icon icon-search" aria-hidden="true" />
      </button>

        <LinkWrapper
          href = {_graphic._url}
          target = {_graphic._target || null}
          className = 'graphic__link js-graphic-link'
          role = 'link'
        >

          

          <templates.image {..._graphic}
            aria-hidden={_isScrollable}
            id={`graphic__scroll__container__${_id}`}
            longDescriptionId={`graphic__longdescription__${_id}`}
            classes="js-graphic-scroll-container"
            classNamePrefixes={[
              'component',
              'graphic'
            ]}
          />

          {_graphic.title &&
          <div
            className="graphic__image-title"
          >
            <div className="graphic__image-title-inner" dangerouslySetInnerHTML={{ __html: compile(_graphic.title) }}>
            </div>
          </div>
          }

          {_graphic.longdescription &&
          <div
            id={`graphic__longdescription__${_id}`}
            className="graphic__longdescription"
          >
            <div className="graphic__longdescription-inner">
              {_graphic.longdescription}
            </div>
          </div>
          }

          {(_popup._isEnabled && _popup._isInline) &&
          <div className="graphic__inlinepopup" aria-hidden="true">
            <div className="graphic__inlinepopup-inner">

              {_popup.title &&
              <div className="graphic__inlinepopup-title">
                <div
                  className="graphic__inlinepopup-title-inner"
                  dangerouslySetInnerHTML={{ __html: compile(_popup.title) }}
                />
              </div>
              }

              {_popup.body &&
              <div className="graphic__inlinepopup-body">
                <div
                  className="graphic__inlinepopup-inner"
                  dangerouslySetInnerHTML={{ __html: compile(_popup.body) }}
                />
              </div>
              }

            </div>
          </div>
          }

        </LinkWrapper>

      </div>

    </div>
  );
}
