import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Row extends Component {
  @tracked inputValue = '';
}
