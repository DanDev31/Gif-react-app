import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en GifGridItem.js', () =>{

    test('Debe mostrar el componente correctamente', () =>{

        const wrapper = shallow(<GifGridItem/>)
        expect( wrapper ).toMatchSnapshot();
    })
    
})