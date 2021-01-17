import React from 'react';
import { Provider} from 'mobx-react'
import AppStore from "./src/stores/AppStore"; 

export default({element})=><Provider store={AppStore}>{element}</Provider>