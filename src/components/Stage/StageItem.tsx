import {
  Image,
  RichText,
  RichTextField,
  Text,
  TextField,
  ImageField,
  withDatasourceCheck,
  useSitecoreContext,  
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import PictureField from '../../types/components/PictureField';
import {Picture } from '../Picture';

type StageItemProps = ComponentProps & {
  fields: {
    Tagline: TextField;
    Title: TextField;
    Description: RichTextField;
    Image: PictureField;
  };
};

const StageItem = ({ fields, rendering }: StageItemProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;

  return isEditing ? (
    <div className="machupicchu-cp cp-stage-item">
      <Image field={fields.Image} rendering={rendering} />
      <div className="uk-overlay uk-overlay-primary uk-position-center-left uk-text-center">
        <Text tag="h3" className="uk-margin-remove" field={fields.Tagline} />
        <Text tag="h2" className="uk-margin-remove" field={fields.Title} />
        <RichText tag="div" className="uk-margin-remove" field={fields.Description} />
      </div>
    </div>
  ) : (
    <li className="machupicchu-cp cp-stage-item">
      <Image field={fields.Image} rendering={rendering} />
      <Picture  field={fields.Image}/>
      <div className="uk-overlay uk-overlay-primary uk-position-center-left uk-text-center">
        <Text tag="h3" className="uk-margin-remove" field={fields.Tagline} />
        <Text tag="h2" className="uk-margin-remove" field={fields.Title} />
        <RichText tag="div" className="uk-margin-remove" field={fields.Description} />
      </div>
    </li>
    
  );
};

export default withDatasourceCheck()<StageItemProps>(StageItem);
