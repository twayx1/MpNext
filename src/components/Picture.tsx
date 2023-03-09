import React from 'react';
import PictureField  from 'src/types/components/PictureField';
import { mediaApi } from '@sitecore-jss/sitecore-jss/media';


export interface ImageSizeParameters {
  [attr: string]: string | number | undefined;
  /** Fixed width of the image */
  w?: number;
  /** Fixed height of the image */
  h?: number;
  /** Max width of the image */
  mw?: number;
  /** Max height of the image */
  mh?: number;
  /** Ignore aspect ratio */
  iar?: 1 | 0;
  /** Allow stretch */
  as?: 1 | 0;
  /** Image scale. Defaults to 1.0 */
  sc?: number;
}

export interface PictureProps {
    [attributeName: string]: unknown;
  
    /** Image field data (consistent with other field types) */
    field?: PictureField;
  
    /**
     * Can be used to explicitly disable inline editing.
     * If true and `media.editable` has a value, then `media.editable` will be processed
     * and rendered as component output. If false, `media.editable` value will be ignored and not rendered.
     */
    editable?: boolean;
  
    /**
     * Parameters that will be attached to Sitecore media URLs
     */
    imageParams?: {
      [paramName: string]: string | number;
    };
  
    //srcSet?: ImageSizeParameters[]; 
  
  }


  const addClassName = (otherAttrs: { [key: string]: unknown }): void => {
    if (otherAttrs.class) {
      // if any classes are defined properly already
      if (otherAttrs.className) {
        let className: string = otherAttrs.className as string;
        className += ` ${otherAttrs.class}`;
        otherAttrs.className = className;
      } else {
        otherAttrs.className = otherAttrs.class;
      }
      delete otherAttrs.class;
    }
  };



  const getImageAttrs = (
    {
      src,
      srcSet,
      ...otherAttrs
    }: {
      [key: string]: unknown;
      src?: string;
      srcSet?: ImageSizeParameters[];
    },
    imageParams?: { [paramName: string]: string | number },
    mediaUrlPrefix?: RegExp
  ) => {
    if (!src) {
      return null;
    }
    addClassName(otherAttrs);
  
    const newAttrs: { [attr: string]: unknown } = {
      ...otherAttrs,
    };
  
    // update image URL for jss handler and image rendering params
    const resolvedSrc = mediaApi.updateImageUrl(src, imageParams, mediaUrlPrefix);
    if (srcSet) {
      // replace with HTML-formatted srcset, including updated image URLs
      newAttrs.srcSet = mediaApi.getSrcSet(resolvedSrc, srcSet, imageParams, mediaUrlPrefix);
    }
    // always output original src as fallback for older browsers
    newAttrs.src = resolvedSrc;
    return newAttrs;
  };
  

export const Picture : React.FC<PictureProps> = ({ field, imageParams, mediaUrlPrefix, ...otherProps })  => {

      const variants = field?.value?.variants;


      if(variants?.length === 0)
        return;

        const defaultVariant = field?.value?.variants[0];
       const img = defaultVariant;
      

        const attrs = getImageAttrs({ ...img, ...otherProps }, imageParams, mediaUrlPrefix);

      if(variants?.length === 1) {
          return <img   {...attrs} ></img>;
      }  else {
          return <picture >
                {variants?.map(variant => 
                  <source srcset={variant.src}></source>
                )};
                 <img  {...attrs} ></img>
          </picture> 
      }
// 
    // var { field, tag, editable, encode } = _a, otherProps = __rest(_a, ["field", "tag", "editable", "encode"]);
    // if (!field || (!field.editable && (field.value === undefined || field.value === ''))) {
    //     return null;
    // }
    // // can't use editable value if we want to output unencoded
    // if (!encode) {
    //     // eslint-disable-next-line no-param-reassign
    //     editable = false;
    // }
    // const isEditable = field.editable && editable;
    // let output = isEditable
    //     ? field.editable || ''
    //     : field.value === undefined
    //         ? ''
    //         : field.value;
    // // when string value isn't formatted, we should format line breaks
    // if (!field.editable && typeof output === 'string') {
    //     const splitted = String(output).split('\n');
    //     if (splitted.length) {
    //         const formatted = [];
    //         splitted.forEach((str, i) => {
    //             const isLast = i === splitted.length - 1;
    //             formatted.push(str);
    //             if (!isLast) {
    //                 formatted.push(react_1.default.createElement("br", { key: i }));
    //             }
    //         });
    //         output = formatted;
    //     }
    // }
    // const setDangerously = isEditable || !encode;
    // let children = null;
    // const htmlProps = Object.assign({}, otherProps);
    // if (setDangerously) {
    //     htmlProps.dangerouslySetInnerHTML = {
    //         __html: output,
    //     };
    // }
    // else {
    //     children = output;
    // }
    // if (tag || setDangerously) {
    //     return react_1.default.createElement(tag || 'span', htmlProps, children);
    // }
    // else {
    //     return react_1.default.createElement(react_1.default.Fragment, null, children);
    // }
    

};
