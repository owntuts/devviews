<!-- https://brandfolder.com/workbench/extract-text-from-image -->

<details>
<summary><h5>How Webhooks Works</h5></summary>

![webhooks](/img/interviews/design-system/webhooks.png)

1. A user or application initiates an action that triggers a webhook. For example, a customer making a purchase on an e-commerce website.

2. The application that’s responsible for the trigger (in our example, the e-commerce website) generates an HTTP POST request containing data related to that event. This request is sent to the webhook URL that has been previously configured by the receiver (in our example, the webhook receiver).

3. The receiver’s server listens for incoming HTTP POST requests at that specific URL. When it receives a request from the sender, it automatically responds with an HTTP status code that indicates it's received the request.

4. The receiver now has the data that was sent from the sender. It can retrieve this data and act on it as necessary. For example, recording the purchase in a database or updating inventory levels.

5. The receiver sends an optional response back to the sender, indicating whether the webhook request was successful or not. This response can be in the form of an HTTP status code or a more detailed JSON payload.

</details>
