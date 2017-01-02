import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {

        backend.connections.subscribe((connection: MockConnection) => {
            setTimeout(() => {
                if (connection.request.url.endsWith('/api/users/login') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());
                    if("admin"===params.username && "admin$admin"===params.password){
                        connection.mockRespond(new Response(new ResponseOptions({
                            status: 200,
                            body: {
                                id: 1,
                                username: "admin",
                                nickName:"管理员",
                                token: 'fake-jwt-token'
                            }
                        })));
                    }else {
                        connection.mockError(new Error('用户名或密码错误！'));
                    }
                    
                }
            }, 500);
        });
        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};