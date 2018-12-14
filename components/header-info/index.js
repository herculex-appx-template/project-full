import { connect } from 'herculex';
import { getIn } from 'herculex/dist/utils/manipulate';

Component(connect({
  mapStateToProps: ['pageName'],
  mapGettersToProps: ['count', 'isDataReady'],
})({
  data: {},
  props: {
    onInstallmentButtonTap: f => f,
  },
  didMount() {
  },
  methods: {
    onInstallmentButtonTap() {
      this.props.onInstallmentButtonTap();
    },
  },
}));
