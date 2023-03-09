import { Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
//import { withPlaceholder } from '@sitecore-jss/sitecore-jss-react';
//import { PlaceholderProps } from 'lib/placeholder-props';
//import { ReactElement } from 'react';
//type StageProps = PlaceholderProps & { stageItemPlaceholders: ReactElement[] };

import { ComponentProps } from 'lib/component-props';
// eslint-disable-next-line @typescript-eslint/ban-types
type StageProps = ComponentProps & {};

const Stage = ({ rendering }: StageProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;
  const attrs = isEditing ? {} : { tabIndex: -1, 'uk-slideshow': 'animation: push' };
  return (
    <div className="machupicchu-cp cp-stage uk-position-relative uk-visible-toggle" {...attrs}>
      {isEditing && (
        <div>
          <Placeholder name="machupicchu-stage-items" rendering={rendering} />
        </div>
      )}
      {!isEditing && (
        <>
          <ul className="uk-slideshow-items">
            <Placeholder name="machupicchu-stage-items" rendering={rendering} />
            {/*stageItemPlaceholders &&
          stageItemPlaceholders.map((component, index) => {
            // this if is important, as it prevents breakage when using Sitecore Experience Editor
            if (component.props && component.props.type === 'text/sitecore') return component;

            return (
              <li key={index} className="machupicchu-cp cp-stage-item">
                {component}
              </li>
            );
          })*/}
          </ul>
          <div className="uk-light">
            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              data-uk-slidenav-previous
              data-uk-slideshow-item="previous"
            ></a>
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              data-uk-slidenav-next
              data-uk-slideshow-item="next"
            ></a>
          </div>
        </>
      )}
    </div>
  );
};

export default Stage;

//export default withPlaceholder({
//  placeholder: 'machupicchu-stage-items',
//  prop: 'stageItemPlaceholders',
//})(Stage);
