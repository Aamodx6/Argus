import React from 'react';
import {AwsPage} from './AwsCosts';
import {ScalePage} from './ScalePage';
export default function DetailPages({route}){
 const pages={'aws-costs':<AwsPage/>,'scale-model':<ScalePage/>};
 return pages[route]||null;
}
