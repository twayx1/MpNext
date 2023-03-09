import { useSitecoreContext, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type TabProps = ComponentProps & {
  fields: {
  };
};


const Tab = ({rendering} : TabProps): JSX.Element => {
  
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;
  return (
    <>
     <Placeholder name="machupicchu-tab-content" rendering={rendering} editing={isEditing} render={(tabs) =>  { 
     if(isEditing)
      return (<div>{tabs}</div>);

return (
<>
<ul className="uk-subnav uk-subnav-pill machupicchu-cp cp-tab">
          {tabs &&
            tabs.map((component : any, index) => {
              const attrs = index == 0 ? { className: 'uk-active' } : {};
              return (
                <li key={component.key} {...attrs}>
                  <a href="">{component.props.fields.Title.value}</a>
                </li>
              );
            })}
        </ul>

<ul className="uk-switcher uk-margin">
  
 {tabs && tabs.map((tab: any, index) => {
    const attrs = index == 0 ? { className: 'uk-active' } : {};
    return (
      <li key={tab} {...attrs}>
        {tab}
      </li>
    );
       })}
</ul>
</>

);
}} />
    </>
  );
};

export default Tab;


