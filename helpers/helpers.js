'use strict';
import ufunc from 'ufunc';

const breakpoints = () => {
  const media = {
    small : 767,
    medium: 768,
    large : 960,
    xlarge: 1200
  };

  const screen = {
    small : (window.innerWidth <= media.small),
    medium: (window.innerWidth >= media.medium && window.innerWidth < media.large),
    large : (window.innerWidth >= media.large && window.innerWidth < media.xlarge),
    xlarge: (window.innerWidth >= media.xlarge)
  };

  return {
    media,
    screen
  };

};


const stringToClasses = (str, cssClasses) => {
  let classes = str.split(' ').map(item => {
    return cssClasses[item];
  });

  return classes.join('');
};


const getClasses = (str, cssClasses) => {
  return typeof str === 'string' ? stringToClasses(str, cssClasses) : '';
};


const getClass = (str, cssClasses) => {
  return cssClasses[str] ? cssClasses[str] : '';
};


const closeClass = (alt) => {
  return alt ? 'uk-close-alt' : ' uk-close';
};


const cleanClasses = (c) => {
  const str = ufunc.cleanAll(c).join(' ').trim();
  return ufunc.maybeIf(str)(str !== '');
};


const colSpan = [
  '1-1',
  '1-2',
  '1-3', '2-3',
  '1-4', '2-4', '3-4',
  '1-5', '2-5', ' 3-5', '4-5',
  '1-6', '2-6', ' 3-6', '4-6', '5-6',
  '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
];


export default {
  breakpoints,
  getClasses,
  getClass,
  closeClass,
  colSpan,
  cleanClasses
};