// this does not work for now..

import {
  LinkField,
  RichTextField,
  TextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type CookieBannerProps = ComponentProps & {
  fields: {
    'First Time Text': RichTextField;
    'Policy Text': RichTextField;
    'Accept Button Text': TextField;
    'Close Button Text': TextField;
    'Cookie Settings Button Text': TextField;
    ConfirmationRequired: boolean;
    CookieSettingsPageLink?: LinkField;
  };
};

const CookieBanner = (): JSX.Element => <div></div>;
/*
const CookieBanner = (props: CookieBannerProps): JSX.Element =>
  (<div
    className="machupicchu-cookie-policy-popup uk-flex-top uk-modal uk-flex uk-open"
    uk-modal=""
    data-confirmation-required="{props.fields.ConfirmationRequired ? '1' : '0'}"
  >
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      {props.fields['First Time Text'] && (
        <div className="machupicchu-cookie-policy-first-time big-container uk-margin-bottom">
          <div className="machupicchu-cookie-policy-content">
            <Text field={props.fields['First Time Text']} />
          </div>
        </div>
      )}

      {((props.fields['Policy Text'] && props.fields['Accept Button Text']) ||
        props.fields.CookieSettingsPageLink) && (
        <div className="machupicchu-cookie-policy-first-time-and-confirmation-required big-container">
          <div className="machupicchu-cookie-policy-confirmation-required big-container">
            {props.fields['Policy Text'] && (
              <div className="machupicchu-cookie-policy-content">
                <p>
                  <RichText field={props.fields['Policy Text']} />
                </p>
                <br />
              </div>
            )}
            {(props.fields['Accept Button Text'] || props.fields.CookieSettingsPageLink) && (
              <div className="machupicchu-cookie-policy-buttons">
                <button
                  className="uk-modal-close-default uk-icon uk-close machupicchu-cookie-policy-popup__close machupicchu-cookie-close"
                  type="button"
                  uk-close=""
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="close-icon"
                  >
                    <line
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      x1="1"
                      y1="1"
                      x2="13"
                      y2="13"
                    ></line>
                    <line
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      x1="13"
                      y1="1"
                      x2="1"
                      y2="13"
                    ></line>
                  </svg>
                </button>
                {props.fields.CookieSettingsPageLink && (
                  <Link
                    field={props.fields.CookieSettingsPageLink}
                    className="machupicchu-cookie-policy-change uk-button uk-button-default"
                  />
                )}

                {props.fields['Accept Button Text'] && (
                  <button className="machupicchu-btn--secondary machupicchu-cookie-policy-accept machupicchu-btn uk-button uk-button-default">
                    <Text field={props.fields['Accept Button Text']} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);
*/

export default withDatasourceCheck()<CookieBannerProps>(CookieBanner);
