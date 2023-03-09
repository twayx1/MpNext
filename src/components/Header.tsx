import {
  Placeholder,
  ImageField,
  Image,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
  fields: {
    Logo: ImageField;
  };
};

const Header = (props: HeaderProps): JSX.Element => (
  // TODO: no-stage
  <div className="header uk-position-relative uk-light uk-background-secondary">
    <div
      className="sticky uk-sticky"
      data-uk-sticky="cls-active: uk-background-secondary uk-box-shadow-medium; top: 100vh; animation: uk-animation-slide-top"
    >
      <div className="uk-container">
        <div className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
          <div className="uk-navbar-left">
            <div className="uk-navbar-item uk-padding-remove-horizontal">
              <a className="uk-logo" href="@Model.HomeUrl">
                {/* @Html.Glass().RenderImage(Model, m => m.Logo, new { mw = 300 }, isEditable: true) */}
                <Image field={props.fields.Logo} />
              </a>
            </div>
          </div>
          <Placeholder name="machupicchu-meta-navigation" rendering={props.rendering} />
          <Placeholder name="machupicchu-main-navigation" rendering={props.rendering} />
          <Placeholder name="machupicchu-search" rendering={props.rendering} />
        </div>
      </div>
    </div>
  </div>
);

export default withDatasourceCheck()<HeaderProps>(Header);
