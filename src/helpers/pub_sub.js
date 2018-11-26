//PubSub is a helper function which we call to help us to publish info on a channel and recieve the same info on a different channel.  To publish info we use the .publish method with 2 arguments - the channel-name and the payload, which is stored in 'detail'.  To subscribe to a channel we use the . subscribe function with 2 arguments - the channel-name and the action we want to take with the payload/ detail.

const PubSub = {
  publish: function(channel, payload){
    console.log(`pubsub is publishing on channel: ${channel}. with the payload: ${payload}`);
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){
    console.log(`pubsub is subscribed to channel: ${channel}`);
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
