import { Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type SliderProps = ComponentProps;

const Slider = ({ rendering }: SliderProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;
  const attrs = isEditing ? {} : {  'uk-slideshow': 'animation: fade; min-height: 250; max-height: 553; autoplay: true; autoplay-interval: 5000; pause-on-hover: true'};
  return (
    <div className="machupicchu-cp cp-slider" {...attrs}>
      {isEditing && (
        <div>
          <Placeholder name="machupicchu-slider-content" rendering={rendering} />
        </div>
      )}
      {!isEditing && (
        <div className="uk-position-relative uk-visible-toggle uk-light">
          <ul className="uk-slideshow-items">
            <Placeholder name="machupicchu-slider-content" rendering={rendering} />
          </ul>
          <a
            className="uk-position-center-left uk-slidenav-large uk-hidden-hover"
            href="#"
            data-uk-slidenav-previous
            data-uk-slideshow-item="previous"
          ></a>
          <a
            className="uk-position-center-left uk-slidenav-large uk-hidden-hover"
            href="#"
            data-uk-slidenav-next
            data-uk-slideshow-item="next"
          ></a>
          {/* <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
        </div>
      )}
    </div>
  );
};

export default Slider;