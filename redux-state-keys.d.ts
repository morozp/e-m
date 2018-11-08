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
	export function fn(): string;	
}

export interface BaseAction {
	type: string;
}

export interface Action<Payload> extends BaseAction {
	payload?: Payload;
}

export type BaseActionFunctions<TAction> =
	ActionFunction0<TAction> |
	ActionFunction1<any, TAction> |
	ActionFunction2<any, any, TAction> |
	ActionFunction3<any, any, any, TAction> |
	ActionFunction4<any, any, any, any, TAction> |
	ActionFunctionAny<TAction>;

export type ActionFunction0<R> = () => R;
export type ActionFunction1<T1, R> = (t1: T1) => R;
export type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
export type ActionFunction3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
export type ActionFunction4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
export type ActionFunctionAny<R> = (...args: any[]) => R;

export function bindStateKeyToActionCreators<Payload>(
	stateKey: string,
	actionCreators: ActionFunction0<Action<Payload>>):
	ActionFunction0<Action<Payload>>