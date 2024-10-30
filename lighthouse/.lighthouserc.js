module.exports = {
    ci: {
      collect: {
        chromePath: false,
        numberOfRuns: 5,
        url: process.env.SERVICE_URL || "http://localhost:9001/" 
      },
      assert: {
        assertions: {
          "categories:performance": [
            "warn",
            {
              minScore: 0.90
            }
          ],
          "categories:accessibility": [
            "error",
            {
              minScore: 0.90
            }
          ],
          "categories:best-practices": [
            "error",
            {
              minScore: 0.90
            }
          ],
          "categories:seo": [
            "error",
            {
              minScore: 0.90
            }
          ]
        }
      },
      upload: {
        target: "lhci",
        token: "9919a8ed-35b8-42c9-b477-de4ec8397061",
        serverBaseUrl: "http://localhost:9001/"
      }
    }
  };
  