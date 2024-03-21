export type RequestLog = {
    id: string;
    createdAt: string;
    instanceId?: string;
    status?: string;
    method?: string;
    host?: string;
    path?: string;
    operationType?: string;
    operationName?: string;
    message?: string;
    duration?: number;
    user?: string;
    success?: boolean;
};
