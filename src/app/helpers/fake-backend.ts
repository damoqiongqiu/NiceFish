import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        let user = {id:1,username:"admin",password:"admin$admin"};

        backend.connections.subscribe((connection: MockConnection) => {
            setTimeout(() => {
                if (connection.request.url.endsWith('/api/users/login') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());
                    connection.mockRespond(new Response(new ResponseOptions({
                            status: 200,
                            body: {
                                id: user.id,
                                username: user.username,
                                nickName:"管理员",
                                token: 'fake-jwt-token'
                            }
                        })));
                }
            }, 500);
        });
        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};