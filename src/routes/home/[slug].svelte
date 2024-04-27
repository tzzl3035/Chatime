<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`home/${params.slug}.json?type=pre`);
		const data = await res.json();
		if (res.status === 200) {
			data.oMsg.reverse();
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;

	let kValue;

	let setUser=false;

	let oldPass;
	let newPass;

	let sleep=false;

	let delBtn=false;

	async function quitLog() {
		const quieLogRes = await fetch(`home/${post.name}.json?type=quit`);
		location.pathname = "";
	}

	async function sendMsg() {
		if(vInput.innerText == "" || kValue == undefined || kValue == "") {
			alert("内容或接收人不能为空!");
		}
		else{
			const sendMsgRes = await fetch(`home/${post.name}.json?type=addMsg&data=${vInput.innerText}&t=${kValue}`);
			// const sendMsgData = await sendMsgRes.json();
			location.pathname = `home/${post.name}`;
		}
	}

	async function addMemo() {
		if(vInput.innerText == "" || kValue == undefined || kValue == "") {
			alert("键值或value值不能为空!");
		}
		else{
			const addMemoRes = await fetch(`home/${post.name}.json?type=addMemo&v=${vInput.innerText}&k=${kValue}`);
			// const addMemoData = await addMemoRes.json();
			location.pathname = `home/${post.name}`;
		}
	}

	function clickMemo1(arg) {
		if(kValue === "" || kValue === undefined){
			kValue = `${arg}`;
		}else{
			kValue = `${kValue}和${arg}`;
		}
	}

	function clickMemo2(argk, argv) {
		clickMemo1(argk);
		vInput.innerText = `${vInput.innerText}${argv}`
	}

	async function delUser() {
		if(oldPass === undefined || oldPass === "") {
			alert("请填写旧密码后尝试!");
		}else{
			const delUserRes = await fetch(`home/${post.name}.json?type=delUser&pass=${oldPass}`);
			const delUserData = await delUserRes.json();
			if(!delUserData.yes) alert("密码错误或其它原因导致删除失败!");
			else location.pathname = "/";
		}
	}
	async function setPass() {
		if(oldPass === undefined || oldPass === "" || newPass === undefined || newPass === "") {
			alert("请填写密码后尝试!");
		}else{
			const delUserRes = await fetch(`home/${post.name}.json?type=setPass&oldPass=${oldPass}&newPass=${newPass}`);
			const delUserData = await delUserRes.json();
			if(!delUserData.yes) alert("密码错误或其它原因导致修改失败!");
			else{
				const quieLogRes = await fetch(`home/${post.name}.json?type=quit`);
				location.pathname = "/login";
			}
		}
	}
	async function delMemo1(memoID) {
		await fetch(`home/${post.name}.json?type=delMemo&id=${memoID}`);
		location.pathname = `home/${post.name}`;
	}
	async function delMsg(msgID) {
		await fetch(`home/${post.name}.json?type=delMsg&id=${msgID}`);
		location.pathname = `home/${post.name}`;
	}

	async function turnMsg(msgID) {
		const turnMsgRes = await fetch(`home/${post.name}.json?type=turnMsg&id=${msgID}`);
		const turnMsgData = await turnMsgRes.json();
		if(!turnMsgData.yes) alert("这不是您的消息或其它原因撤回失败!");
		else{
			location.pathname = `home/${post.name}`;
		}
	}
</script>

<style>
	main {
		width: 100%;
	}
	.top {
		margin-top: 3em;
	}
	@media (max-width: 767.33px) {
		#oUse {
			top: 58%;
		}
	}
</style>

<svelte:head>
	<title>{post.name}的主页</title>
</svelte:head>

<div class="container" style="height: 100%;border-radius: 1em;" id="cont">
	{#if setUser}
	<form id="form" style="margin-top: 15em;">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">旧密码</div>
            <input class="form-control" autocomplete="off" bind:value={oldPass} type="password">
          </div>
        </div>
        <div class="form-group top">
          <div class="input-group">
            <div class="input-group-addon">新密码</div>
            <input class="form-control" type="password" bind:value={newPass}>
          </div>
        </div>
        <div class="form-group top">
          <button class="btn btn-warning btn-block" type="button" style="outline:none;" on:click={setPass}>修改密码</button>
        </div>
      </form>
      <button class="btn btn-danger btn-block top" style="outline: none;" on:click={delUser}>删除账户</button>
	<button class="btn btn-success btn-block top" style="outline: none;" on:click={()=>setUser=!setUser}>退出设置</button>
	{:else if sleep}
	<div class="bg-info" style="height: 97%; border-radius: 1em;">
		<h1 class="text-primary lead text-center" style="line-height: 5em; font-size: 3.7em;">正在睡眠状态...</h1>
		<button class="btn btn-success btn-block text-center" style="outline: none;margin-top: 23%;" on:click={()=>history.go(0)}>进入{post.name}的首页</button>
	</div>
	{:else}
	<div class="row">
		<h3 class="col-sm-2 text-primary" on:click={()=>setUser = !setUser}>你好 {post.name}</h3>
		<h5 class="col-sm-2 text-danger" style="line-height: 1.3em;">Tip:用户设置请点击用户名,离开时点击睡眠按钮,没新消息时试试刷新</h5>
		<button class="btn col-sm-1 btn-primary" style="outline: none;" on:click={()=>sleep=true}>睡眠</button>
		<button class="btn col-sm-1 col-sm-offset-1" style="outline: none;" on:click={()=>history.go(0)}>刷新</button>
		<button class="btn col-sm-2 col-sm-offset-1 btn-danger" style="outline: none;" on:click={()=>delBtn=!delBtn}>删除按钮开关</button>
		<button class="col-sm-1 btn btn-info col-sm-offset-1" on:click={quitLog} style="outline: none;">注销</button>
	</div>
	<div class="row" style="height: 58%;">
		<div class="col-sm-9 btn-success" style="overflow: auto; height: 100%;border-radius: 0.3em;">
			{#each post.oMsg as {data, t, f, _id}}
				<div class="row" style="line-height: 1.3em;font-size: 1.1em;border-bottom: 3px solid pink;">
					<div class="col-sm-3 test-center">{f} 发送给 {t}</div>
					<div class="col-sm-offset-1 col-sm-5">{data}</div>
					{#if delBtn}
					<button class="col-sm-offset-1 col-sm-1 btn btn-danger" style="outline: none;" on:click={delMsg(_id)}>删除</button>
					<button class="col-sm-1 btn btn-danger" style="outline: none;" on:click={turnMsg(_id)}>撤回</button>
					{/if}
				</div>
			{/each}
		</div>
		<div class="col-sm-3 btn-warning" style="overflow: auto; height: 100%;border-radius: 0.3em;">
			{#each post.myMemo as {k, v, _id}}
				<div class="row" style="line-height: 1.3em;font-size: 1.1em;border-bottom: 3px solid pink;">
					<div class="col-sm-4 test-center"  on:click|once={clickMemo1(k)}>{k}</div>
					<div class="col-sm-5 text-center" on:click|once={clickMemo2(k, v)}>{v}</div>
					{#if delBtn}
					<button class="btn btn-danger col-sm-offset-1 col-sm-2" style="outline: none;" on:click|stopPropagation ={delMemo1(_id)}>删除</button>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<div style="height: 35%;position: relative;" id="oUse">
		<div class="text-info text-center" style="width: 100%;height:9%;line-height: 1.3em;font-size: 1.5em;">内容或备忘录具体值</div>
		<div class="row" style="height: 60%;">
			<div class="col-sm-12 bg-info" style="overflow: auto;height: 100%;border-radius: 0.3em;outline: none;font-size: 1.7em;line-height: 1em;" contenteditable id="vInput"></div>
		</div>
		<form id="form" style="margin-top: 1em;">
	        <div class="form-group row">
	          <div class="input-group col-xs-12">
	            <div class="input-group-addon">发给谁(和)或键值</div>
	            <input class="form-control" type="input" bind:value={kValue}>
	          </div>
	        </div>
	        <div class="form-group row">
	          <button class="btn btn-success col-xs-7" type="button" style="outline: none;" on:click={sendMsg}>发送消息</button>
	          <button class="btn btn-warning col-xs-5" type="button" style="outline: none;" on:click={addMemo}>添加备忘录</button>
	        </div>
	      </form>
  </div>
  {/if}
</div>
