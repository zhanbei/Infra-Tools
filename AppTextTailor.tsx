'use strict';

import React from 'react';
import {LayoutEmbeddedApp} from '../components/LayoutEmbeddedApp';
import {ScriptsHome} from './ScriptsHome/ScriptsHome';

export const AppTextTailor = React.memo(() => {
	return (
		<LayoutEmbeddedApp
			title={'Text Tailor'}
			body={<ScriptsHome/>}
		/>
	);
});
