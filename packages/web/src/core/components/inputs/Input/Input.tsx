import React from 'react';
import { UseFormMethods } from 'react-hook-form';

import { BodyText } from '@nerve/core/components/typography';

import { InputProps } from './Input.d';
import * as styled from './Input.styles';

export const Input = React.forwardRef<any, InputProps>(
    ({ color, name, label, ...others }, ref) => {
        return (
            <styled.Input color={color}>
                <label htmlFor={name} hidden>
                    {label}
                </label>
                <input name={name} ref={ref} {...others} />
            </styled.Input>
        );
    }
);

Input.displayName = 'Input';
