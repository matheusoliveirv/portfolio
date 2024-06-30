import styled from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        
        colors: {
        primary: string,
        text: string,
        subText: string,
        Avatar: string,
        background: string,
        blur: string,
        },
    }
}