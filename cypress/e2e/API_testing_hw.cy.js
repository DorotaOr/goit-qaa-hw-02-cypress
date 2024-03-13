describe("httpbin API tests", () => {
  // I test
  it("response code should be 200", () => {
    cy.request("https://httpbin.org/headers").then((response) => {
      const status = response.status;

      assert.equal(200, status);
    });
  });

  // II test - intentionally incorrect
  const requestII = {
    url: "https://httpbin.org/language",
    failOnStatusCode: false,
  };
  it("I response code should be 200", () => {
    cy.request(requestII).then((response) => {
      const status = response.status;

      assert.equal(200, status);
    });
  });

  // III test
  const requestIII = {
    method: "GET",
    url: "https://httpbin.org/bearer",
    failOnStatusCode: false,
  };

  it("response code should be 401", () => {
    cy.request(requestIII).then((response) => {
      assert.equal(401, response.status);
    });
  });

  // IV test - intentionally incorrect
  const requestIV = {
    method: "DELETE",
    url: "https://httpbin.org/patch",
    failOnStatusCode: false,
  };

  it("response code should be 405", () => {
    cy.request(requestIV).then((response) => {
      assert.equal(405, response.status);
    });
  });

  // V test
  const requestV = {
    url: "https://httpbin.org/anything",
    qs: {
      anything: null,
    },
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(requestV).then((response) => {
      assert.equal("", response.body.args.anything);
    });
  });

  // VI test
  it("should have property 'uuid'", () => {
    cy.request("https://httpbin.org/uuid").then((response) => {
      expect(response.body).to.have.property("uuid");
    });
  });

  // VII test
  it("should have property 'cookies'", () => {
    cy.request("https://httpbin.org/cookies").then((response) => {
      expect(response.body).to.have.property("cookies");
    });
  });

  // VIII test
  const requestVIII = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "user-agent": "My test user-agent",
    },
    failOnStatusCode: false,
  };

  it("test that user-agent set correctly", () => {
    cy.request(requestVIII).then((response) => {
      assert.equal(200, response.status);
      assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
    });
  });

  // IX test
  it("should return POST data", () => {
    cy.request("POST", "https://httpbin.org/anything", {
      data: "number 123",
    }).then((response) => {
      expect(response.body.json).to.deep.equal({ data: "number 123" });
    });
  });

  // X test
  const bodyData = {
    bodyKey: "bodyValue",
  };

  const request = {
    method: "POST",
    url: "https://httpbin.org/post",
    body: bodyData,
    failOnStatusCode: false,
  };

  it("complex post test", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    });
  });

  // XI test
  it("test complex response body", () => {
    cy.request(request).then((response) => {
      const expectedBody = {
        key: "value",
      };

      assert.equal(expectedBody, response.body);
    });
  });

  // XII test - np. gdy deweloper usunął stronę i sprawdzamy czy faktycznie ona nie istnieje
  it("should return 404 status code", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/status/404",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  // --------------------------------------------------------------------------------------------
  // XIII test
  const requestXI = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      Cookie: "cookieName=cookieValue",
    },
    failOnStatusCode: false,
  };

  it("test sends cookie", () => {
    cy.request(requestXI).then((response) => {
      assert.equal(200, response.status);
      assert.equal("cookieName=cookieValue", response.requestHeaders["Cookie"]);
    });
  });

  // XIV test
  it("test random ids", () => {
    for (let i = 0; i < 10; i++) {
      const randomId = Math.floor(Math.random() * 10000000);
      const request = {
        method: "GET",
        url: "https://httpbin.org/headers",
        id: randomId,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });

  // XV test
  it("test single response body key", () => {
    cy.request(request).then((response) => {
      assert.equal("someFieldValue", response.body["someFieldName"]);
    });
  });

  // XVI test
  it("test header", () => {
    cy.request(request).then((response) => {
      assert.equal("key=value", response.headers["Set-Cookie"]);
    });
  });

  // XVII test - debugowanie
  it("response code should be 200", () => {
    const request = {
      method: "GET",
      url: "https://httpbin.org/api/users/2",
    };

    cy.request(request).then((resp) => {
      console.log(resp); // lub: cy.log(resp.body.data.email);
      assert.equal("janet.weaver@httpbin.org", resp.body.data.email);

      //       // lub:
      //       // cy.request(request).then(resp => {
      //       //   debugger;
      //       //   const body = resp.body;
      //       //   const email = body.data.email;
      //       //   assert.equal("janet.weaver@reqres.in", email);
      //     });
      //   });
      // });
    });
  });
});
