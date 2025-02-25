<!-- Why this file. In order for the flex search to index the chain info they
cannot be inside a Vue component since it is rendered at runtime. The chains.json
file here is read during the Vite build so the data will actually end up inside
/dist/<filename>.
-->
<!-- Remember that any change to the HTML will most likely
require a restart of the dev server-->
<!-- WARNING
DO NOT place line breaks between HTML element like <div>.
They will not render as HTML but rather text or you get an error. No idea why!
-->
<div class="api3-bc-chains-box" v-for="(chain, index) in chains">
    <div class="api3-bc-chains-name" :href="chain.explorerUrl+'/address/'+chain.contracts['Api3ServerV1']"
      >{{ chain.fullName }} 
    </div>
    <div class="api3-bc-chain-token">
      {{ chain.nativeToken }}
    </div>
    <div class="api3-bc-chains-id">
      Chain Id: <b>{{ chain.id }}</b>
    </div>
    <div class="api3-bc-chains-contract-address">
      <div class="api3-bc-chains-contract-address" v-if="chain.contracts['Api3ServerV1']">
        Api3ServerV1.sol:
        <a :href="chain.explorerUrl+'/address/'+chain.contracts['Api3ServerV1']" target="_chainExplore">
          <span>{{ chain.contracts['Api3ServerV1'] }}<ExternalLinkImage /></span>
        </a><CopyIcon :text="chain.contracts['Api3ServerV1']"/>
      </div>
      <div class="api3-bc-chains-contract-address" v-if="chain.contracts['ProxyFactory']">
        ProxyFactory.sol:
        <a :href="chain.explorerUrl+'/address/'+chain.contracts['ProxyFactory']" target="_chainExplore">
          <span>{{ chain.contracts['ProxyFactory'] }}<ExternalLinkImage /></span>
        </a><CopyIcon :text="chain.contracts['ProxyFactory']"/>
      </div>
    </div>
</div>

<script setup lang="ts">
    import chains from './chains.json';
</script>

<style>
.api3-bc-chains-name {
  font-size: large;
  font-weight: bold;
  margin-bottom: 5px;
  color:gray;
}
.api3-bc-chain-token {
  float: right;
  margin-top: -34px;
  font-size: small;
  color: gray;
}

.api3-bc-chains-id {
  font-size: small;
  color: gray;
}
.api3-bc-chains-contract-address {
  font-family: courier;
  font-size: small;
  margin-top: 3px;
  color: gray;
}
.api3-bc-chains-box {
  overflow-wrap: anywhere;
  padding-top: 5px;
  padding-left: 16px;
  padding-right: 5px;
  padding-bottom: 10px;
  border: solid lightgrey 1px;
  border-radius: 0.5em;
  margin-bottom: 15px;
  max-width: 620px;
}
</style>
