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
                                        <xsl:if test="option">?</xsl:if><xsl:value-of select="name" />
                                    </div>
                                    <xsl:comment>
                                        <xsl:if test="option">
                                            <div class="func-param-optional">
                                                Optional
                                            </div>
                                        </xsl:if>
                                    </xsl:comment>
                                    <div class="func-param-type">
                                        <a class="link">
                                            <xsl:if test="link">
                                                <xsl:attribute name="href">
                                                    <xsl:value-of select="link" />
                                                </xsl:attribute>
                                            </xsl:if>

                                            <xsl:value-of select="type" />
                                        </a>
                                    </div>
                                    <div class="desc">
                                        <xsl:value-of select="desc" />
                                    </div>
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
                Alias: <xsl:value-of select="alias" />
            </body>
        </html>
    </xsl:template>
    <xsl:template match="/class">
    </xsl:template>
</xsl:stylesheet>