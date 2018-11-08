// Type definitions for redux-state-keys

/*~ This is the global-modifying module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note: If your global-modifying module is callable or constructable, you'll
 *~ need to combine the patterns here with those in the module-class or module-function
 *~ template files
 */
declare module 'redux-state-keys' {
	export const STATE_KEY_PROPERTY = '__reduxStateKey__';
	export interface BaseAction {
		type: string;
	}

	export interface Action<Payload> extends BaseAction {
		payload?: Payload;
	}

	export type BaseActionFunctions<TAction> =
		ActionFunction0<TAction> |
		ActionFunction1<any, TAction> |
		ActionFunctionAny<TAction>;

	export type ActionFunction0<R> = () => R;
	export type ActionFunction1<T1, R> = (t1: T1) => R;
	export type ActionFunctionAny<R> = (...args: any[]) => R;

	type WithKey = { STATE_KEY_PROPERTY: string };
	export type ActionFunctionWithKey0<R> = () => R & WithKey;
	export type ActionFunctionWithKey1<T1, R> = (t1: T1) => R & WithKey;
	export type ActionFunctionWithKeyAny<R> = (...args: any[]) => R & WithKey;

	export function bindStateKeyToActionCreators<Payload>(
		stateKey: string,
		actionCreators: ActionFunction0<Action<Payload>>):
		ActionFunctionWithKey0<Action<Payload>>

	export function bindStateKeyToActionCreators<Arg1, Payload>(
		stateKey: string,
		actionCreators: ActionFunction1<Arg1, Action<Payload>>):
		ActionFunctionWithKey1<Arg1, Action<Payload>>

	export function bindStateKeyToActionCreators<Payload>(
		stateKey: string,
		actionCreators: ActionFunctionAny<Payload>):
		ActionFunctionWithKeyAny<Action<Payload>>

	export function bindStateKeyToActionCreators(
		stateKey: string,
		actionCreators: object): { [key: string]: BaseActionFunctions<BaseAction> };

	export function bindStateKeyToSelector<Result, SubState, State>(
		stateKey: string,
		selector: (subState: SubState, stateKey: string) => Result)
		: (state: State) => Result;

	export function bindStateKeyToSelectors<Result1, Result2, SubState, State>(
		stateKey: string,
		selectors: {
			[selectorName: string]: (subState: SubState, stateKey: string) => Result1 | Result2;
		}): {
			[selectorName: string]: (state: State, stateKey: string) => Result1 | Result2;
		}
	export function bindStateKeyToSelectors<Result1, Result2, Result3, SubState, State>(
		stateKey: string,
		selectors: {
			[selectorName: string]: (subState: SubState, stateKey: string) => Result1 | Result2 | Result3;
		}): {
			[selectorName: string]: (state: State, stateKey: string) => Result1 | Result2 | Result3;
		}

	export function bindStateKeyToSelectors<Result1, Result2, Result3, Result4, SubState, State>(
		stateKey: string,
		selectors: {
			[selectorName: string]: (subState: SubState, stateKey: string) => Result1 | Result2 | Result3 | Result4;
		}): {
			[selectorName: string]: (state: State, stateKey: string) => Result1 | Result2 | Result3 | Result4;
		}

	export function bindStateKeyToSelectors<Result1, Result2, Result3, Result4, Result5, SubState, State>(
		stateKey: string,
		selectors: {
			[selectorName: string]: (subState: SubState, stateKey: string) => Result1 | Result2 | Result3 | Result4 | Result5;
		}): {
			[selectorName: string]: (state: State, stateKey: string) => Result1 | Result2 | Result3 | Result4 | Result5;
		}

	export function bindStateKeyToSelectors<SubState, State>(
		stateKey: string,
		selectors: {
			[selectorName: string]: (subState: SubState, stateKey: string) => any;
		}): {
			[selectorName: string]: (state: State, stateKey: string) => any;
		}

	export function createSelectorWithStateKeyHandling<Result, SubState = {}, State = {}>(
		selector: (subState: SubState) => Result,
		initialSubstate: SubState,
		sliceName: keyof State & string,
	): (state: State, stateKey: string, ...args: any) => Result;

	export function createSelectorsWithStateKeyHandling<SubState = {}, State = {}>(
		selectors: { [selectorName: string]: (subState: SubState) => any },
		initialSubstate: SubState,
		sliceName: keyof State & string,
	): (state: State, stateKey: string, ...args: any) => any;

	export function createSelectorsWithStateKeyHandling<Result1, Result2, SubState = {}, State = {}>(
		selectors: { [selectorName: string]: (subState: SubState) => Result1 | Result2 },
		initialSubstate: SubState,
		sliceName: keyof State & string,
	): (state: State, stateKey: string, ...args: any) => Result1 | Result2;

	export function createSelectorsWithStateKeyHandling<Result1, Result2, Result3, SubState = {}, State = {}>(
		selectors: { [selectorName: string]: (subState: SubState) => Result1 | Result2 | Result3 },
		initialSubstate: SubState,
		sliceName: keyof State & string,
	): (state: State, stateKey: string, ...args: any) => Result1 | Result2 | Result3;

	export function createSelectorsWithStateKeyHandling<Result1, Result2, Result3, Result4, SubState = {}, State = {}>(
		selectors: { [selectorName: string]: (subState: SubState) => Result1 | Result2 | Result3 | Result4 },
		initialSubstate: SubState,
		sliceName: keyof State & string,
	): (state: State, stateKey: string, ...args: any) => Result1 | Result2 | Result3 | Result4;

	export function createReducerWithStateKeyHandling<SubState={}, State={}>(
		subReducer: (state: SubState, action: BaseAction) => SubState,
		initialSubState: SubState,
		initialState: State,
	): (state: State, action: BaseAction) => State;


}

