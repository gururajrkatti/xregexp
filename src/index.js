import XRegExp from './xregexp';

import build from './addons/build';
import matchRecursive from './addons/matchrecursive';
import unicodeBase from './addons/unicode-base';
import unicodeCategories from './addons/unicode-categories';
import unicodeProperties from './addons/unicode-properties';
import unicodeScripts from './addons/unicode-scripts';

build(XRegExp);
matchRecursive(XRegExp);
unicodeBase(XRegExp);
unicodeCategories(XRegExp);
unicodeProperties(XRegExp);
unicodeScripts(XRegExp);

export default XRegExp;
