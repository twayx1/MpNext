import { Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FaqInsideProps = ComponentProps & {  fields: {
  'Multiple Open': boolean;
};};

const FaqInside = ({ rendering, fields }: FaqInsideProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;
  const attrs = isEditing ? {} : fields['Multiple Open'] ? {  'uk-accordion': 'multiple: true;'} : {  'uk-accordion': 'multiple: false;'} ;
  return (
    <div className="machupicchu-cp cp-faq" {...attrs}>
      <Placeholder name="machupicchu-faq-inside-content" rendering={rendering} />
    </div>
  );
};

export default FaqInside;