<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/func">
        <html>
            <head>
                <link rel="stylesheet" href="../style-css.css" />
            </head>
            <body>
                <div class="title">
                    Function <xsl:value-of select="name" />
                </div>
                <hr class="sep" />
                <div>
                    <xsl:value-of select="desc" />
                </div>
                <xsl:for-each select="usage">
                    <div class="item">
                        <div class="func-title">
                            <xsl:value-of select="/func/name" />
                            (
                            <xsl:value-of select="params" />
                            )
                            <span class="ver">
                                -
                                Added in <xsl:value-of select="ver" />
                            </span>
                        </div>
                        <div class="func-params">
                            <xsl:for-each select="param">
                                <div class="func-param">
                                    <div>
                                        <xsl:value-of select="name" />
                                        <xsl:if test="option"><span class="optional">Optional</span></xsl:if>
                                    </div>
                                    <div class="func-param-type">
                                        <a class="link">
                                            <xsl:if test="link">
                                                <xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute>
                                            </xsl:if>

                                            <xsl:value-of select="type" />
                                        </a>
                                    </div>
                                    <div class="desc"><xsl:value-of select="desc" /></div>
                                </div>
                            </xsl:for-each>
                        </div>
                        <div>
                            Returns: <a class="link">
                                <xsl:if test="return/link">
                                    <xsl:attribute name="href">
                                        <xsl:value-of select="return/link" />
                                    </xsl:attribute>
                                </xsl:if>
                                <xsl:value-of select="return/type" />
                            </a>

                        </div>

                    </div>
                </xsl:for-each>
                <xsl:if test="alias">
                    Alias: <xsl:value-of select="alias" />
                </xsl:if>

            </body>
        </html>
    </xsl:template>

    <xsl:template match="/class">
        <html>
            <head>
                <link rel="stylesheet" href="../style-css.css" />
            </head>
            <body>
                <div class="title">
                    Class <xsl:value-of select="name" />
                </div>
                <hr class="sep" />
                <div><xsl:value-of select="desc" /></div><br />
                <div>
                    <div>
                        Methods
                    </div>
                    <ul id="map">
                        <xsl:for-each select="meth">
                            <li>
                                <a>
                                    <xsl:attribute name="href">
                                        #<xsl:value-of select="name" />
                                    </xsl:attribute>
                                    <xsl:value-of select="name" />
                                </a>
                            </li>
                        </xsl:for-each>
                    </ul>
                </div>

                <div class="subtitle">Constructor</div>
                <xsl:for-each select="cons">
                    <div class="item">
                        <div class="func-title">
                            <xsl:value-of select="/func/name" />
                            (
                            <xsl:value-of select="params" />
                            )
                        </div>
                        <div class="func-params">
                            <xsl:for-each select="param">
                                <div class="func-param">
                                    <div>
                                        <xsl:value-of select="name" />
                                        <xsl:if test="option"><span class="optional">Optional</span></xsl:if>
                                    </div>
                                    <div class="func-param-type">
                                        <a class="link">
                                            <xsl:if test="link">
                                                <xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute>
                                            </xsl:if>

                                            <xsl:value-of select="type" />
                                        </a>
                                    </div>
                                    <div class="desc"><xsl:value-of select="desc" /></div>
                                </div>
                            </xsl:for-each>
                        </div>
                    </div>
                </xsl:for-each>
                <xsl:if test="prop">
                    <div class="subtitle">Properties</div>
                    <xsl:for-each select="prop">
                        <div class="item">
                            <div class="func-title">
                                <xsl:value-of select="name" />
                                <span class="ver">
                                    -
                                    Added in <xsl:value-of select="ver" />
                                </span>
                            </div>
                            <div class="func-param-type">
                                <a class="link">
                                    <xsl:if test="link">
                                        <xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute>
                                    </xsl:if>

                                    <xsl:value-of select="type" />
                                </a>
                            </div>
                            <div>
                                <xsl:value-of select="desc" />
                            </div>
                        </div>
                    </xsl:for-each>
                </xsl:if>
                <div class="subtitle">Methods</div>
                <xsl:for-each select="meth">
                    <div class="item">
                        <xsl:attribute name="id">
                            <xsl:value-of select="name" />
                        </xsl:attribute>
                        <div class="func-title">
                            <xsl:value-of select="name" />
                            (
                            <xsl:value-of select="params" />
                            )
                            <span class="ver">
                                -
                                Added in <xsl:value-of select="ver" />
                            </span>
                        </div>
                        <div><xsl:value-of select="desc" /></div>
                        <xsl:if test="not(no-param)">
                            <div class="func-params">
                                <xsl:for-each select="param">
                                    <div class="func-param">
                                        <div>
                                            <xsl:value-of select="name" />
                                            <xsl:if test="option"><span class="optional">Optional</span></xsl:if>
                                        </div>
                                        <div class="func-param-type">
                                            <a class="link">
                                                <xsl:if test="link">
                                                    <xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute>
                                                </xsl:if>

                                                <xsl:value-of select="type" />
                                            </a>
                                        </div>
                                        <div class="desc"><xsl:value-of select="desc" /></div>
                                    </div>
                                </xsl:for-each>
                            </div>
                        </xsl:if>
                        <div>
                            Returns: <a class="link">
                            <xsl:if test="return/link">
                                <xsl:attribute name="href">
                                    <xsl:value-of select="return/link" />
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:value-of select="return/type" />
                        </a>
                        </div>
                        <xsl:if test="alias">
                            <div>
                                Alias: <xsl:value-of select="alias" />
                            </div>
                        </xsl:if>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>