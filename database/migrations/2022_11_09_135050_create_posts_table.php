<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('brand')->nullable();
            $table->string('title');
            $table->string('slug');
            $table->text('summary')->nullable();
            $table->text('content')->nullable();
            $table->string('featured');
            $table->string('prodfeatured')->nullable();
            $table->integer('social');
            $table->integer('active');
            $table->integer('menu');
            $table->integer('type');
            $table->decimal('valnormal', 6, 2)->nullable();
            $table->decimal('valpromo', 6, 2)->nullable();
            $table->integer('linked')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
