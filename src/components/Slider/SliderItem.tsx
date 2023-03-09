import {
  Image,
  withDatasourceCheck,
  useSitecoreContext,
  ImageField
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
//import PictureField from '../../types/components/PictureField';

type SliderItemProps = ComponentProps & {
  fields: {
    Image: ImageField;
  };
};

const SliderItem = ({ fields, rendering }: SliderItemProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;

  return isEditing ? (
    <div className="machupicchu-cp cp-stage-item">
      <Image field={fields.Image} rendering={rendering} />
    </div>
  ) : (
      <li className="machupicchu-cp cp-stage-item">
        <Image field={fields.Image} rendering={rendering} />
      </li>
  );
};

export default withDatasourceCheck()<SliderItemProps>(SliderItem);
