<template>
    <div class="container mt-5">
        <form @submit="submitForm">
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input v-model="post.title" class="input" type="text" placeholder="Title">
                </div>
            </div>

            <div class="field">
                <label class="label">Post İçeriği</label>
                <div class="control">
                    <textarea v-model="post.content" class="textarea" placeholder="..."></textarea>
                </div>
            </div>

            <div class="field">
                <label class="label">Creator</label>
                <div class="control">
                    <input v-model="post.creator" class="input" type="text" placeholder="...">
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button type="submit" class="button is-primary" href="http://localhost:8080/">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ['post', 'submitForm'],
}

</script>

<style></style>