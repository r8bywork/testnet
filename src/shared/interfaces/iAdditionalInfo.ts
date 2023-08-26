import React from "react";
import {Condition} from "../types/types.ts";

export interface iAdditionalInfoProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    number?: number;
    text?: string;
    conditions?: Condition[];
    width?: string;
    height?: string;
    fontSize?: string;
}